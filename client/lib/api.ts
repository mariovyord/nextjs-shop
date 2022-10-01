interface IApiError {
    status?: number;
    code?: number;
}

export class ApiError extends Error implements IApiError {
    status = 404;
    constructor(url: string, status: number) {
        super(`'${url} returned ${status}'`);
        Object.setPrototypeOf(this, ApiError.prototype);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError);
        }

        this.name = 'ApiError';
        this.status = status;
    }
}

export const fetchJson = async (url: string, options?: any) => {
    const res = await fetch(url, options)

    if (!res.ok) {
        throw new ApiError(url, res.status);
    }

    return await res.json();
}