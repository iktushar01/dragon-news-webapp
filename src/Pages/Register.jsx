import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { use } from 'react';
const Register = () => {
    const {createUser , setUser} = use(AuthContext)

    const handleRegister = (e) => {
       
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const termsAccepted = form.terms.checked;

        console.log({ name, photoURL, email, password, termsAccepted });

        createUser(email , password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage , errorCode);
            alert(errorMessage)
        })
    };

    return (
        <div className="min-h-[calc(100vh-138px)] flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Register your account</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Your Name*</label>
                        <input
                        required
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Enter your photo URL"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Email*</label>
                        <input
                        required
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Password*</label>
                        <input
                        required
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input 
                            required
                            type="checkbox" name="terms" className="mr-2" />
                            <span className="text-sm text-gray-700">Accept <span className="font-semibold">Terms & Conditions</span></span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors mb-4"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-center text-gray-700">
                    Already have an account?{' '}
                    <Link to="/auth/login" className="text-black font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
