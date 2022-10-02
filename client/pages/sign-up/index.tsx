import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import PageHeading from '../../components/common/heading';
import { useSignIn } from '../../hooks/useSignIn';
import { useSignUp } from '../../hooks/useSignUp';

const SignIn = () => {
    const [errorMsg, setErrorMsg] = useState('');

    const router = useRouter();
    const { signUp, signUpIsError, signUpIsLoading } = useSignUp();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const username = formData.get('username') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const rePassword = formData.get('rePassword') as string;

        if (password !== rePassword) {
            return undefined; // TODO add notifications
        }

        const signUpMsg = await signUp({ username, email, password });

        if (signUpMsg === 'Success') {
            return router.push('/');
        } else {
            setErrorMsg(signUpMsg);
            setTimeout(() => {
                setErrorMsg('');
            }, 5000)
        }

    }

    return (
        <div className='flex flex-col justify-center align-middle sm:items-center'>
            <section>
                <form onSubmit={handleSubmit} className='py-8 sm:px-8 w-full sm:w-96 form-control gap-2'>
                    <PageHeading>Sign Up</PageHeading>
                    <div className="form-control w-full">
                        <label htmlFor='username' className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="input input-bordered w-full"
                            required={true}
                            minLength={3}
                            maxLength={30}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor='email' className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            required={true}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            required={true}
                            minLength={6}
                            maxLength={100}
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Repeat Password</span>
                        </label>
                        <input
                            type="password"
                            name="rePassword"
                            placeholder="Repeat Password"
                            className="input input-bordered w-full"
                            required={true}
                            minLength={6}
                            maxLength={100}
                        />
                    </div>
                    {errorMsg !== '' && <span className='text-error-content text-center block p-1 bg-error rounded-lg'>{errorMsg}</span>}
                    <button
                        disabled={signUpIsLoading}
                        type='submit'
                        className={`btn btn-primary mt-4 ${signUpIsLoading && 'loading'}`}
                    >Submit</button>
                </form>
            </section>
            <section className='min-w-[320px]'>
                <div className="divider">Already have an account?</div>
            </section>
            <section>
                <Link href="/sign-in">
                    <a className='btn btn-primary btn-outline w-full'>
                        Sign In
                    </a>
                </Link>
            </section>
        </div>
    )
}

export default SignIn;