
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

const SignUp = () => {
  const subtitle: ReactNode = (
    <>
      Already have an account?{" "}
      <Link to="/signin" className="font-medium text-primary-600 hover:text-primary-500">
        Sign in
      </Link>
    </>
  );
  
  return (
    <AuthLayout 
      title="Create your account" 
      subtitle={subtitle}
    >
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <div className="mt-1">
              <Input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <div className="mt-1">
              <Input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                required
                className="block w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1">
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1">
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="block w-full"
            />
          </div>
        </div>

        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <div className="mt-1">
            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="block w-full"
            />
          </div>
        </div>

        <div className="flex items-center">
          <Checkbox id="agree-terms" required />
          <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
            I agree to the{" "}
            <Link to="/terms" className="font-medium text-primary-600 hover:text-primary-500">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="font-medium text-primary-600 hover:text-primary-500">
              Privacy Policy
            </Link>
          </label>
        </div>

        <div>
          <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white">
            Create account
          </Button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button variant="outline" className="w-full">
            Google
          </Button>
          <Button variant="outline" className="w-full">
            Microsoft
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
