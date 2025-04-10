import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const meetingData = [
  {
    id: "1",
    "Applicant Name": "Darlene Robertson",
    Position: "UI/UX Designer",
    Role: "Intern",
    "Scheduled For": "11:00 AM",
  },
  {
    id: "2",
    "Applicant Name": "Darlene Robertson",
    Position: "UI/UX Designer",
    Role: "Intern",
    "Scheduled For": "11:00 AM",
  },
  {
    id: "3",
    "Applicant Name": "Darlene Robertson",
    Position: "UI/UX Designer",
    Role: "Intern",
    "Scheduled For": "11:00 AM",
  },
  {
    id: "4",

    "Applicant Name": "Darlene Robertson",
    Position: "UI/UX Designer",
    Role: "Intern",
    "Scheduled For": "11:00 AM",
  },
  {
    id: "5",

    "Applicant Name": "Darlene Robertson",
    Position: "UI/UX Designer",
    Role: "Intern",
    "Scheduled For": "11:00 AM",
  },
  {
    id: "6",

    "Applicant Name": "Darlene Robertson",
    Position: "UI/UX Designer",
    Role: "Intern",
    "Scheduled For": "11:00 AM",
  },
];

function Meeting() {
  return (
    <div className="w-full px-4 py-6  shadow-custom1 bg-white rounded-xl  font-light">
      <h1 className="text-2xl font-SFPro font-medium">Today's Meeting</h1>
      <Table className="text-base mt-5 font-Lexend">
        <TableHeader>
          <TableRow>
            <TableHead className="text-custom-textLight font-light">
              Applicant Name
            </TableHead>
            <TableHead className="text-custom-textLight font-light">
              Role
            </TableHead>
            <TableHead className="text-custom-textLight font-light">
              Position
            </TableHead>
            <TableHead className="text-custom-textLight font-light">
              Scheduled For
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {meetingData.map((data) => (
            <TableRow key={data.id}>
              <TableCell> {data["Applicant Name"]}</TableCell>
              <TableCell> {data["Role"]}</TableCell>
              <TableCell> {data["Position"]}</TableCell>
              <TableCell> {data["Scheduled For"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Meeting;
