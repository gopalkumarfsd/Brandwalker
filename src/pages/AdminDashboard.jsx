import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [adminUser, setAdminUser] = useState({});
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [inquiryCount, setInquiryCount] = useState(0);

  const [subscribers, setSubscribers] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState("");
  const [deletingSubscriberId, setDeletingSubscriberId] =
    useState("");

  const [error, setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login");
        return;
      }

      const [subscriberResponse, inquiryResponse] =
        await Promise.all([
          fetch("http://localhost:5001/api/subscribers", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),

          fetch("http://localhost:5001/api/inquiries", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

      const subscriberData =
        await subscriberResponse.json();

      const inquiryData =
        await inquiryResponse.json();

      if (
        subscriberResponse.status === 401 ||
        subscriberResponse.status === 403 ||
        inquiryResponse.status === 401 ||
        inquiryResponse.status === 403
      ) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        navigate("/admin/login");
        return;
      }

      if (!subscriberResponse.ok) {
        throw new Error(
          subscriberData.message ||
            "Unable to fetch subscribers"
        );
      }

      if (!inquiryResponse.ok) {
        throw new Error(
          inquiryData.message ||
            "Unable to fetch inquiries"
        );
      }

      const subscriberList =
        subscriberData.subscribers ||
        subscriberData.data ||
        [];

      const inquiryList =
        inquiryData.inquiries ||
        inquiryData.data ||
        [];

      setSubscribers(
        Array.isArray(subscriberList)
          ? subscriberList
          : []
      );

      setSubscriberCount(
        Array.isArray(subscriberList)
          ? subscriberList.length
          : 0
      );

      setInquiries(
        Array.isArray(inquiryList)
          ? inquiryList
          : []
      );

      setInquiryCount(
        Array.isArray(inquiryList)
          ? inquiryList.length
          : 0
      );
    } catch (error) {
      console.error("Dashboard Error:", error);

      setError(
        error.message ||
          "Unable to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser =
      localStorage.getItem("adminUser");

    if (storedUser) {
      try {
        setAdminUser(JSON.parse(storedUser));
      } catch {
        setAdminUser({});
      }
    }

    fetchDashboardData();
  }, []);

  const handleDeleteInquiry = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);
      setError("");

      const token =
        localStorage.getItem("adminToken");

      const response = await fetch(
        `http://localhost:5001/api/inquiries/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (
        response.status === 401 ||
        response.status === 403
      ) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        navigate("/admin/login");
        return;
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to delete inquiry"
        );
      }

      setInquiries((currentInquiries) =>
        currentInquiries.filter(
          (inquiry) =>
            inquiry._id !== id
        )
      );

      setInquiryCount((currentCount) =>
        Math.max(currentCount - 1, 0)
      );
    } catch (error) {
      console.error(
        "Delete Inquiry Error:",
        error
      );

      setError(
        error.message ||
          "Unable to delete inquiry"
      );
    } finally {
      setDeletingId("");
    }
  };

  const handleDeleteSubscriber = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this subscriber?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingSubscriberId(id);
      setError("");

      const token =
        localStorage.getItem("adminToken");

      const response = await fetch(
        `http://localhost:5001/api/subscribers/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (
        response.status === 401 ||
        response.status === 403
      ) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        navigate("/admin/login");
        return;
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to delete subscriber"
        );
      }

      setSubscribers((currentSubscribers) =>
        currentSubscribers.filter(
          (subscriber) =>
            subscriber._id !== id
        )
      );

      setSubscriberCount((currentCount) =>
        Math.max(currentCount - 1, 0)
      );
    } catch (error) {
      console.error(
        "Delete Subscriber Error:",
        error
      );

      setError(
        error.message ||
          "Unable to delete subscriber"
      );
    } finally {
      setDeletingSubscriberId("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* HEADER */}
      <header className="bg-slate-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">
              Brandwalker Admin
            </h1>

            <p className="text-sm text-slate-300">
              Admin Dashboard
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm">
              {adminUser.name || "Admin"}
            </span>

            <button
              onClick={handleLogout}
              className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-slate-200 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto p-6">
        {/* TITLE + REFRESH */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Dashboard
            </h2>

            <p className="text-slate-500 mt-1">
              Welcome back,{" "}
              {adminUser.name || "Admin"}.
            </p>
          </div>

          <button
            onClick={fetchDashboardData}
            disabled={loading}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-800 disabled:opacity-50"
          >
            {loading
              ? "Loading..."
              : "Refresh"}
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">
            <p className="font-semibold">
              Dashboard Error
            </p>

            <p className="text-sm mt-1">
              {error}
            </p>
          </div>
        )}

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* INQUIRIES */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-slate-500 text-sm font-medium">
              Total Inquiries
            </p>

            <h3 className="text-4xl font-bold text-slate-900 mt-3">
              {loading
                ? "..."
                : inquiryCount}
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Customer enquiries received
            </p>
          </div>

          {/* SUBSCRIBERS */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-slate-500 text-sm font-medium">
              Subscribers
            </p>

            <h3 className="text-4xl font-bold text-slate-900 mt-3">
              {loading
                ? "..."
                : subscriberCount}
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Newsletter subscribers
            </p>
          </div>

          {/* LEADS */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-slate-500 text-sm font-medium">
              New Leads
            </p>

            <h3 className="text-4xl font-bold text-slate-900 mt-3">
              {loading
                ? "..."
                : inquiryCount}
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Potential customer leads
            </p>
          </div>
        </div>

        {/* CUSTOMER INQUIRIES */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Customer Inquiries
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Recent inquiries submitted
                  from the website.
                </p>
              </div>

              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                {inquiryCount}
              </span>
            </div>
          </div>

          {loading ? (
            <div className="p-8 text-center text-slate-500">
              Loading inquiries...
            </div>
          ) : inquiries.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              No inquiries found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                      Customer
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                      Contact
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                      Expo
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                      Stall Size
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                      Message
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                      Date
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  {inquiries.map(
                    (inquiry) => (
                      <tr
                        key={inquiry._id}
                        className="hover:bg-slate-50"
                      >
                        <td className="px-6 py-4">
                          <p className="font-semibold text-slate-900">
                            {inquiry.name ||
                              "-"}
                          </p>
                        </td>

                        <td className="px-6 py-4">
                          <p className="text-sm text-slate-700">
                            {inquiry.email ||
                              "-"}
                          </p>

                          <p className="text-sm text-slate-500 mt-1">
                            {inquiry.phone ||
                              "-"}
                          </p>
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-700">
                          {inquiry.expoName ||
                            "-"}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-700">
                          {inquiry.stallSize ||
                            "-"}
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-600 max-w-xs">
                          <p className="line-clamp-3">
                            {inquiry.message ||
                              "-"}
                          </p>
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-500 whitespace-nowrap">
                          {inquiry.createdAt
                            ? new Date(
                                inquiry.createdAt
                              ).toLocaleDateString()
                            : "-"}
                        </td>

                        <td className="px-6 py-4">
                          <button
                            onClick={() =>
                              handleDeleteInquiry(
                                inquiry._id
                              )
                            }
                            disabled={
                              deletingId ===
                              inquiry._id
                            }
                            className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 disabled:opacity-50"
                          >
                            {deletingId ===
                            inquiry._id
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* NEWSLETTER SUBSCRIBERS */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Newsletter Subscribers
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  People subscribed to your
                  newsletter.
                </p>
              </div>

              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                {subscriberCount}
              </span>
            </div>
          </div>

          {loading ? (
            <div className="p-8 text-center text-slate-500">
              Loading subscribers...
            </div>
          ) : subscribers.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              No subscribers found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                      Email
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                      Subscribed On
                    </th>

                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-600">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  {subscribers.map(
                    (subscriber) => (
                      <tr
                        key={subscriber._id}
                        className="hover:bg-slate-50"
                      >
                        <td className="px-6 py-4">
                          <p className="font-medium text-slate-900">
                            {subscriber.email}
                          </p>
                        </td>

                        <td className="px-6 py-4 text-sm text-slate-500">
                          {subscriber.createdAt
                            ? new Date(
                                subscriber.createdAt
                              ).toLocaleDateString()
                            : "-"}
                        </td>

                        <td className="px-6 py-4">
                          <button
                            onClick={() =>
                              handleDeleteSubscriber(
                                subscriber._id
                              )
                            }
                            disabled={
                              deletingSubscriberId ===
                              subscriber._id
                            }
                            className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 disabled:opacity-50"
                          >
                            {deletingSubscriberId ===
                            subscriber._id
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ADMIN ACCOUNT */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-slate-900">
            Admin Account
          </h3>

          <div className="mt-4 space-y-2 text-slate-600">
            <p>
              <strong>Name:</strong>{" "}
              {adminUser.name || "-"}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {adminUser.email || "-"}
            </p>

            <p>
              <strong>Role:</strong>{" "}
              {adminUser.role || "-"}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;