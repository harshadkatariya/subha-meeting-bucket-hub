
import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { ArrowRight, Calendar, MessageSquare, Video, FileVideo, Users, Inbox } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Landing = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-white to-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Video Meetings <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Reimagined</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Elevate your virtual meetings with centralized meeting management, HD video conferencing, and the innovative Meeting Bucket feature.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white shadow-lg">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline">
                    See Features
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Video meeting dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose Subha?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Everything you need for professional virtual meetings in one platform.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">HD Video & Audio</h3>
              <p className="mt-4 text-gray-600">
                Crystal clear video and audio for professional meetings with up to 100 participants.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Integrated Chat</h3>
              <p className="mt-4 text-gray-600">
                Group and private chat with file sharing capabilities during and after meetings.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                <FileVideo className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Meeting Bucket</h3>
              <p className="mt-4 text-gray-600">
                Centralized storage for all meeting recordings, transcripts, and metadata in one place.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Smart Scheduling</h3>
              <p className="mt-4 text-gray-600">
                Schedule and manage meetings with calendar integration and automated reminders.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Breakout Rooms</h3>
              <p className="mt-4 text-gray-600">
                Split your meeting into smaller groups for collaborative discussions and brainstorming.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 rounded-lg shadow-lg text-white">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <Inbox className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Meeting Bucket</h3>
              <p className="mt-4">
                Our signature feature that revolutionizes how you store, access, and share meeting content.
              </p>
              <Link to="/features/meeting-bucket">
                <Button variant="secondary" className="mt-6">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to revolutionize your meetings?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-primary-100">
            Join thousands of teams using Subha to make their virtual meetings more productive.
          </p>
          <div className="mt-10">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                Get Started For Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Trusted by teams everywhere
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700">
                "Subha has completely transformed how our team conducts remote meetings. The Meeting Bucket feature is a game-changer for keeping all our meeting content organized."
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Jane Doe</p>
                  <p className="text-sm text-gray-500">CTO, Tech Company</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700">
                "The quality of video and audio is exceptional, and the integrated features make collaboration so much easier. We've switched our entire company to Subha."
              </p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <Avatar>
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">John Smith</p>
                  <p className="text-sm text-gray-500">CEO, Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Landing;
