import { Link } from 'react-router-dom';

import { Head } from '../seo';
import logo from '@/assets/aliste-logo.png';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const AuthLayout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="flex min-h-screen flex-col justify-center bg-gray-50 py12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Link className="flex items-center text-white" to="/">
              <img className="h-24 w-auto" src={logo} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
