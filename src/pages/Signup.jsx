import { useState } from 'react'
import { supabase } from '../supabaseClient'
import { Link, useNavigate } from 'react-router-dom'

// Creating pieces of memory using useState
function Signup() {
    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('buyer') 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    // Function to redirect the user to another page
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()    // stops the page from refreshing
        setLoading(true)    // show "loading... " on button
        setError('')      // clear any old error


        // Telling supabase to create a new User
        const { data, error } = await supabase.auth.signUp({
            // create email with phone number so supabase accepts it
            email: `${phone}@farmconnect.gh`,
            password,
            options:{
                data: {
                    full_name: fullName,
                    phone,
                    role
                }
            }
        })

        if (error) {
            setError(error.message)
        } else {
            alert('Check your phone for SMS confirmation code!')
            navigate('/login')
        }
        setLoading(false)
    }

    return (
        <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
                Create Account
            </h2>

            <form onSubmit={handleSignup} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium">Full Name</label>
                    <input type="text"
                            required
                            value={fullName}
                            className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none
                            focus:ring-2 focus:ring-green-600"
                            onChange={(e) => setFullName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Phone Number</label>
                    <input type="tel"
                            placeholder="0241234567"
                            required
                            className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none 
                            focus:ring-2 focus:ring-green-600"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Password</label>
                    <input type="password"
                            minLength="6"
                            required
                            className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none 
                            focus:ring-2 focus:ring-green-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="space-y-3">
                    <p className="text-gray-700 font-medium">I am a:</p>
                    <label className="flex items-center space-x-3">
                        <input type="radio"
                                name="role"
                                value="buyer"
                                checked={role === 'buyer'}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-5 h-5 text-green-600"
                        />
                        <span className="text-lg">Buyer (I want to buy produce)</span>
                    </label>

                    <label className="flex items-center space-x-3">
                        <input type="radio"
                                name="role"
                                value="farmer"
                                checked={role === 'farmer'}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-5 h-5 text-green-600"
                        />
                        <span className="text-lg">Farmer (I want to sell produce)</span>
                    </label>
                </div>

                {error && <p className="text-red-600 text-center">{error}</p>}

                <button type="submit"
                        disabled={loading}
                        className="w-full bg-green-700 hover:bg-green-800 
                        disabled:bg-gray-400 text-white font-bold py-4 
                        rounded-lg text-xl transition"
                >
                    {loading ? 'Creating Account...' : 'Sign Up'}
                </button>
            </form>

            <p className="text-center mt-6 text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-green-700 font-bold hover:underline">
                    Login here
                </Link>
            </p>
        </div>
    )
}

export default Signup;