
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  Download, 
  FileAudio, 
  FileText, 
  FileVideo, 
  Search, 
  Share2, 
  User, 
  Users 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MeetingBucket = () => {
  const meetings = [
    {
      id: "1",
      title: "Weekly Team Standup",
      date: "Apr 20, 2025",
      time: "10:00 AM",
      duration: "45 min",
      participants: 8,
      hasVideo: true,
      hasAudio: true,
      hasTranscript: true,
      hasNotes: true,
    },
    {
      id: "2",
      title: "Product Demo with Client",
      date: "Apr 19, 2025",
      time: "2:30 PM",
      duration: "60 min",
      participants: 5,
      hasVideo: true,
      hasAudio: true,
      hasTranscript: true,
      hasNotes: false,
    },
    {
      id: "3",
      title: "Marketing Strategy Session",
      date: "Apr 18, 2025",
      time: "11:00 AM",
      duration: "90 min",
      participants: 6,
      hasVideo: true,
      hasAudio: true,
      hasTranscript: false,
      hasNotes: true,
    },
    {
      id: "4",
      title: "Design Review",
      date: "Apr 17, 2025",
      time: "3:00 PM",
      duration: "45 min",
      participants: 4,
      hasVideo: true,
      hasAudio: true,
      hasTranscript: true,
      hasNotes: true,
    },
    {
      id: "5",
      title: "Client Onboarding",
      date: "Apr 16, 2025",
      time: "10:30 AM",
      duration: "60 min",
      participants: 3,
      hasVideo: true,
      hasAudio: true,
      hasTranscript: false,
      hasNotes: false,
    },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meeting Bucket</h1>
          <p className="text-gray-500 mt-1">
            Access all your meeting recordings, transcripts, and notes in one place
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search meetings..."
              className="pl-10"
            />
          </div>
          <div className="flex gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Meetings</SelectItem>
                <SelectItem value="video">With Video</SelectItem>
                <SelectItem value="transcript">With Transcript</SelectItem>
                <SelectItem value="notes">With Notes</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="title">Title (A-Z)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Meeting List */}
        <Tabs defaultValue="grid">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="grid" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {meetings.map((meeting) => (
                <Card key={meeting.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-100 relative">
                    {meeting.hasVideo ? (
                      <img
                        src={`https://picsum.photos/seed/${meeting.id}/800/450`}
                        alt={meeting.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <FileVideo className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {meeting.duration}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{meeting.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap gap-y-1">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        {meeting.date}
                      </div>
                      <div className="flex items-center mr-4">
                        <Clock className="h-3 w-3 mr-1" />
                        {meeting.time}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {meeting.participants} participants
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {meeting.hasVideo && (
                        <Button variant="outline" size="sm" className="flex items-center gap-1 p-1 h-8">
                          <FileVideo className="h-3.5 w-3.5" />
                          <span className="text-xs">Video</span>
                        </Button>
                      )}
                      {meeting.hasAudio && (
                        <Button variant="outline" size="sm" className="flex items-center gap-1 p-1 h-8">
                          <FileAudio className="h-3.5 w-3.5" />
                          <span className="text-xs">Audio</span>
                        </Button>
                      )}
                      {meeting.hasTranscript && (
                        <Button variant="outline" size="sm" className="flex items-center gap-1 p-1 h-8">
                          <FileText className="h-3.5 w-3.5" />
                          <span className="text-xs">Transcript</span>
                        </Button>
                      )}
                    </div>
                    <div className="mt-4 flex justify-between">
                      <Button variant="secondary" size="sm" className="flex items-center gap-1">
                        <Download className="h-3.5 w-3.5" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Share2 className="h-3.5 w-3.5" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-6">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-200">
                  {meetings.map((meeting) => (
                    <div key={meeting.id} className="flex items-center justify-between p-4 hover:bg-gray-50">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                          <FileVideo className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1 flex-wrap gap-x-3">
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {meeting.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {meeting.time}
                            </span>
                            <span className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {meeting.participants} participants
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {meeting.hasVideo && (
                          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-1">
                            <FileVideo className="h-4 w-4" />
                            Video
                          </Button>
                        )}
                        {meeting.hasAudio && (
                          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-1">
                            <FileAudio className="h-4 w-4" />
                            Audio
                          </Button>
                        )}
                        <Button variant="secondary" size="sm" className="flex items-center gap-1">
                          <Share2 className="h-4 w-4" />
                          <span className="hidden sm:inline">Share</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default MeetingBucket;
