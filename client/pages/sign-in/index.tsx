import { useRouter } from 'next/router';
import React, { FormEvent } from 'react';
import PageHeading from '../../components/common/heading';
import { useSignIn } from '../../hooks/useSignIn';

const SignIn = () => {
    const router = useRouter();
    const { signIn, signInIsLoading, signInIsError } = useSignIn();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const isSignInValid = await signIn({ email, password });
        if (isSignInValid) {
            router.push('/');
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='p-8 w-full sm:w-96  form-control gap-2'>
                <PageHeading>Sign In</PageHeading>
                <div className="form-control w-full max-w-xs">
                    <label htmlFor='email' className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        required={true}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Choose secure password"
                        className="input input-bordered w-full max-w-xs"
                        required={true}
                    />
                </div>
                {signInIsError && <span className='text-error-content text-center block p-1 bg-error rounded-lg'>Invalid credentials</span>}
                <button
                    disabled={signInIsLoading}
                    type='submit'
                    className={`btn btn-primary mt-4 ${signInIsLoading && 'loading'}`}
                >Submit</button>
            </form>
        </div>
    )
}

export default SignIn;