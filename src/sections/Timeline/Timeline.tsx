import Timeline, {
  TimelineItem,
  TimelineItemDate,
  TimelineItemDescription,
  TimelineItemTitle,
} from "@/components/ui/timeline";

const MyTimeline = () => {
  return (
    <div className="w-full flex justify-center">
      <Timeline orientation="horizontal">
        <TimelineItem className="h-40">
          <TimelineItemDate>2023</TimelineItemDate>
          <TimelineItemTitle>Started Web Development</TimelineItemTitle>
          <TimelineItemDescription>
            Learned HTML, CSS & JavaScript basics.
          </TimelineItemDescription>
        </TimelineItem>

        <TimelineItem className="h-40">
          <TimelineItemDate>2024</TimelineItemDate>
          <TimelineItemTitle>MERN Stack Learning</TimelineItemTitle>
          <TimelineItemDescription>
            React, Node.js, Express & MongoDB.
          </TimelineItemDescription>
        </TimelineItem>

        <TimelineItem className="h-40">
          <TimelineItemDate>2024</TimelineItemDate>
          <TimelineItemTitle>Built Real Projects</TimelineItemTitle>
          <TimelineItemDescription>
            Created full-stack & UI-based applications.
          </TimelineItemDescription>
        </TimelineItem>

        <TimelineItem className="h-40">
          <TimelineItemDate>2025</TimelineItemDate>
          <TimelineItemTitle>Freelancing</TimelineItemTitle>
          <TimelineItemDescription>
            Working with real clients & improving skills.
          </TimelineItemDescription>
        </TimelineItem>

        <TimelineItem className="h-40">
          <TimelineItemDate>2023 - Present</TimelineItemDate>
          <TimelineItemTitle>Diploma in Engineering</TimelineItemTitle>
          <TimelineItemDescription>
            Habiganj Polytechnic Institute
          </TimelineItemDescription>
        </TimelineItem>

        <TimelineItem className="h-40">
          <TimelineItemDate>2021 - 2023</TimelineItemDate>
          <TimelineItemTitle>SSC</TimelineItemTitle>
          <TimelineItemDescription>
            Habiganj Technical School & College
          </TimelineItemDescription>
        </TimelineItem>

        <TimelineItem className="h-40">
          <TimelineItemDate>Course</TimelineItemDate>
          <TimelineItemTitle>Web Development Course</TimelineItemTitle>
          <TimelineItemDescription>
            Completed MERN-based training
          </TimelineItemDescription>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default MyTimeline;
