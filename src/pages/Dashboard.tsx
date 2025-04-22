
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MessageSquare, Plus, User, Video } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const upcomingMeetings = [
    {
      id: "1",
      title: "Weekly Team Standup",
      time: "Today, 10:00 AM",
      participants: 8,
      host: "You"
    },
    {
      id: "2",
      title: "Product Demo with Client",
      time: "Today, 2:30 PM",
      participants: 5,
      host: "Sarah Chen"
    },
    {
      id: "3",
      title: "Marketing Strategy Session",
      time: "Tomorrow, 11:00 AM",
      participants: 6,
      host: "Mike Johnson"
    }
  ];

  const recentMeetings = [
    {
      id: "r1",
      title: "Design Review",
      date: "Yesterday",
      duration: "45 min",
      participants: 4,
      hasRecording: true
    },
    {
      id: "r2",
      title: "Client Onboarding",
      date: "2 days ago",
      duration: "60 min",
      participants: 3,
      hasRecording: true
    }
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back to Subha</p>
          </div>
          <div className="flex gap-3">
            <Link to="/schedule">
              <Button variant="outline" className="flex gap-2">
                <Calendar className="h-4 w-4" />
                Schedule
              </Button>
            </Link>
            <Link to="/join-meeting">
              <Button className="bg-primary-600 text-white flex gap-2">
                <Video className="h-4 w-4" />
                Join Meeting
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/new-meeting" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Video className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">New Meeting</h3>
                    <p className="text-sm text-gray-500">Start a video call now</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Plus className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/schedule" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Schedule</h3>
                    <p className="text-sm text-gray-500">Plan a meeting</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Plus className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/chats" className="block">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Chat</h3>
                    <p className="text-sm text-gray-500">Send a message</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Plus className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Upcoming Meetings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Meetings</CardTitle>
              <CardDescription>Your schedule for today and tomorrow</CardDescription>
            </div>
            <Link to="/schedule">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <Video className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {meeting.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm text-gray-500 mr-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {meeting.participants} participants
                      </div>
                      <div>Host: {meeting.host}</div>
                    </div>
                    <Button size="sm" className="bg-primary-600 text-white">
                      Join
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Meetings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Meeting Bucket</CardTitle>
              <CardDescription>Access your recent meeting recordings and notes</CardDescription>
            </div>
            <Link to="/bucket">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMeetings.map((meeting) => (
                <div key={meeting.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <Video className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1 space-x-3">
                        <span>{meeting.date}</span>
                        <span>•</span>
                        <span>{meeting.duration}</span>
                        <span>•</span>
                        <span>{meeting.participants} participants</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
