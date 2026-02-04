"use client";

const stats = [
  { title: "Issues Reported", value: 1200 },
  { title: "Issues Resolved", value: 950 },
  { title: "Pending Issues", value: 250 },
];

const priorityIssues = [
  {
    id: 1,
    title: "Pothole on 5th Avenue",
    priority: "High",
  },
  {
    id: 2,
    title: "Streetlight Outage on Main St",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Graffiti Removal on Elm St",
    priority: "Low",
  },
];

const bids = [
  {
    id: 1,
    title: "Road Repair Bid",
    status: "Open",
    contractor: "ABC Constructions",
    amount: 500000,
    issueTitle: "Pothole on 5th Avenue",
  },
  {
    id: 2,
    title: "Park Renovation Bid",
    status: "Closed",
    contractor: "XYZ Construction",
    amount: 750000,
    issueTitle: "Streetlight Outage on Main St",
  },
  {
    id: 3,
    title: "Building Renovation Bid",
    status: "Open",
    contractor: "PQR Construction",
    amount: 1000000,
    issueTitle: "Pothole on 5th Avenue",
  },
];

export default function AdminPage() {
  const openBids = bids.filter((bid) => bid.status === "Open");

  return (
    <div className="mb-10 px-4">
      <h1 className="text-3xl font-bold mt-4 ml-2">
        Admin Dashboard
      </h1>

      {/* Statistics Cards */}
      <section className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-gray-100 p-4 rounded-lg shadow-md border-l-4 "
          >
            <h2 className="text-xl font-semibold">{stat.title}</h2>
            <p className="text-lg">{stat.value.toLocaleString()}</p>
          </div>
        ))}
      </section>

      {/* Issues by Priority */}
      <section className="mt-10 mx-2">
        <h2 className="text-2xl font-semibold mb-4">Priority Issues</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorityIssues.map((issue) => (
            <div
              key={issue.id}
              className="p-4 border-l-4 bg-white shadow-md rounded"
            >
              <h3 className="text-xl font-semibold">{issue.title}</h3>

              <p
                className={`mt-1 font-medium ${
                  issue.priority === "High"
                    ? "text-red-600 border-red-500"
                    : issue.priority === "Medium"
                    ? "text-yellow-600 border-yellow-500"
                    : "text-green-600 border-green-500"
                }`}
              >
                {issue.priority}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Bids Section */}
      <section className="mt-10 mx-2">
        <h2 className="p-4 rounded-lg text-xl font-semibold flex justify-between items-center bg-gray-100 shadow">
          <span>Open Bids</span>

          <span className="text-sm text-gray-600">
            ({openBids.length} / {bids.length})
          </span>
        </h2>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {openBids.map((bid) => (
            <div
              key={bid.id}
              className="bg-white p-4 rounded shadow border-l-4 flex flex-col gap-3 hover:shadow-lg transition"
            >
              {/* Top row */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{bid.issueTitle}</h3>
                  <p className="text-sm text-gray-600">{bid.contractor}</p>
                </div>

                <span className="text-xs px-2 py-1 rounded-full bg-blue-100">
                  {bid.status}
                </span>
              </div>

              {/* Amount */}
              <p className="text-sm font-medium">
                ₹{bid.amount.toLocaleString()}
              </p>

              {/* Actions */}
              <div className="flex justify-end gap-2">
                <button
                  className="px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200"
                  onClick={() => console.log("Review bid", bid.id)}
                >
                  Review
                </button>

                <button
                  className="px-3 py-1 text-sm rounded bg-black text-white hover:bg-gray-800"
                  onClick={() => console.log("Accept bid", bid.id)}
                >
                  Accept
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
