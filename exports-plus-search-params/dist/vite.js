const e = `import mimicFunction from 'mimic-function';
const cacheStore = new WeakMap();
/**
[Memoize](https://en.wikipedia.org/wiki/Memoization) functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input.

@param fn - Function to be memoized.

@example
\`\`\`
import {setTimeout as delay} from 'node:timer/promises';
import pMemoize from 'p-memoize';
import got from 'got';

const memoizedGot = pMemoize(got);

await memoizedGot('https://sindresorhus.com');

// This call is cached
await memoizedGot('https://sindresorhus.com');

await delay(2000);

// This call is not cached as the cache has expired
await memoizedGot('https://sindresorhus.com');
\`\`\`
*/
export default function pMemoize(fn, options) {
    const defaultCacheKey = ([firstArgument]) => firstArgument;
    const { cacheKey = defaultCacheKey, cache = new Map(), } = options ?? {};
    // Promise objects can't be serialized so we keep track of them internally and only provide their resolved values to \`cache\`
    // \`Promise<AsyncReturnType<FunctionToMemoize>>\` is used instead of \`ReturnType<FunctionToMemoize>\` because promise properties are not kept
    const promiseCache = new Map();
    const memoized = function (...arguments_) {
        const key = cacheKey(arguments_);
        if (promiseCache.has(key)) {
            return promiseCache.get(key);
        }
        const promise = (async () => {
            try {
                if (cache && await cache.has(key)) {
                    return (await cache.get(key));
                }
                const promise = fn.apply(this, arguments_);
                const result = await promise;
                try {
                    return result;
                }
                finally {
                    if (cache) {
                        const allow = options?.shouldCache
                            ? await options.shouldCache(result, { key, argumentsList: arguments_ })
                            : true;
                        if (allow) {
                            await cache.set(key, result);
                        }
                    }
                }
            }
            finally {
                promiseCache.delete(key);
            }
        })();
        promiseCache.set(key, promise);
        return promise;
    };
    mimicFunction(memoized, fn, {
        ignoreNonConfigurable: true,
    });
    cacheStore.set(memoized, cache);
    return memoized;
}
/**
- Only class methods are supported; regular functions are not part of the decorators proposals.
- Uses the new ECMAScript decorators (TypeScript 5.0+). Legacy \`experimentalDecorators\` are not supported.
- Babel’s legacy decorators are not supported.
- Private methods are not supported.

@returns A decorator to memoize class methods or static class methods.

@example
\`\`\`
import {pMemoizeDecorator} from 'p-memoize';

class Example {
    index = 0

    @pMemoizeDecorator()
    async counter() {
        return ++this.index;
    }
}

class ExampleWithOptions {
    index = 0

    @pMemoizeDecorator()
    async counter() {
        return ++this.index;
    }
}
\`\`\`
*/
export function pMemoizeDecorator(options = {}) {
    return function (value, context) {
        if (context.kind !== 'method') {
            throw new TypeError('pMemoizeDecorator can only decorate methods');
        }
        if (context.private) {
            throw new TypeError('pMemoizeDecorator cannot decorate private methods');
        }
        context.addInitializer(function () {
            const memoizedMethod = pMemoize(value, options);
            Object.defineProperty(this, context.name, {
                configurable: true,
                writable: true,
                enumerable: false,
                value: memoizedMethod,
            });
        });
    };
}
/**
Clear all cached data of a memoized function.

@param fn - Memoized function.
*/
export function pMemoizeClear(fn) {
    if (!cacheStore.has(fn)) {
        throw new TypeError('Can\\'t clear a function that was not memoized!');
    }
    const cache = cacheStore.get(fn);
    if (!cache) {
        throw new TypeError('Can\\'t clear a function that doesn\\'t use a cache!');
    }
    if (typeof cache.clear !== 'function') {
        throw new TypeError('The cache Map can\\'t be cleared!');
    }
    cache.clear();
}
`;
console.log(e);
