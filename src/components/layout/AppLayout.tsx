
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Settings, 
  Users, 
  MessageSquare, 
  Video, 
  LogOut, 
  Menu, 
  X, 
  Inbox 
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-10 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center px-6 border-b border-gray-200">
            <Link to="/dashboard" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Subha</span>
            </Link>
          </div>
          
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <Link to="/dashboard">
              <Button variant="ghost" className="w-full justify-start">
                <Inbox className="mr-3 h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link to="/meetings">
              <Button variant="ghost" className="w-full justify-start">
                <Video className="mr-3 h-5 w-5" />
                Meetings
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="mr-3 h-5 w-5" />
                Schedule
              </Button>
            </Link>
            <Link to="/chats">
              <Button variant="ghost" className="w-full justify-start">
                <MessageSquare className="mr-3 h-5 w-5" />
                Chats
              </Button>
            </Link>
            <Link to="/contacts">
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-3 h-5 w-5" />
                Contacts
              </Button>
            </Link>
            <Link to="/bucket">
              <Button variant="secondary" className="w-full justify-start">
                <Inbox className="mr-3 h-5 w-5" />
                Meeting Bucket
              </Button>
            </Link>
          </nav>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="text-sm font-medium">Jane Smith</p>
                  <p className="text-xs text-gray-500">jane@example.com</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" className="w-full mt-4 justify-start text-red-500">
              <LogOut className="mr-3 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'md:pl-64' : ''} flex flex-col`}>
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 sm:px-6">
          <button
            onClick={toggleSidebar}
            className="mr-4 md:hidden text-gray-500 hover:text-primary-600"
          >
            {isSidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          <div className="flex-1"></div>
          <div className="flex items-center space-x-4">
            {/* Notification icon, etc. could go here */}
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
