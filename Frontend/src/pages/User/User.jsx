import { useState, useEffect } from "react";
import { useGetUserMutation } from "@/redux/user/userApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/user/userSlice";
import Account from "./components/Account/Account";
import Modal from "./components/Modal/Modal";
import { useUpdateUserMutation } from "@/redux/user/userApi";

function User() {
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { userData } = useSelector((state) => state.user) || {};

  const [getUser, { isLoading, error }] = useGetUserMutation();
  const [updateUser, { isLoading: isLoadingUpdate, error: errorUpdate }] =
    useUpdateUserMutation();

  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Fetch user data when component mounts
  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
      return null;
    }
    getUser()
      .unwrap()
      .then((result) => {
        dispatch(setUser(result.body));
      })
      .catch((err) => {
        console.error("Error retrieving user data:", err);
      });
  }, []);

  // Update firstName & lastName when userData changes
  useEffect(() => {
    if (userData) {
      setFirstName(userData.firstName || "");
      setLastName(userData.lastName || "");
    }
  }, [userData]);

  const handleOpenModal = () => setIsOpenModal(true);

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setFirstName(userData?.firstName || "");
    setLastName(userData?.lastName || "");
  };

  const handleEditName = async () => {
    try {
      await updateUser({ firstName, lastName }).unwrap();
      dispatch(setUser({ firstName, lastName }));
      setIsOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const accountsData = [
    {
      accountId: 1,
      name: "Argent Bank Checking (x8349)",
      balance: "$2,082.79",
      balanceDescription: "Available balance",
    },
    {
      accountId: 2,
      name: "Argent Bank Savings (x6712)",
      balance: "$10,928.42",
      balanceDescription: "Available balance",
    },
    {
      accountId: 3,
      name: "Argent Bank Credit Card (x8349)",
      balance: "$184.30",
      balanceDescription: "Current balance",
    },
  ];

  return (
    <>
      <Modal
        dataModal={{
          isOpenModal,
          handleCloseModal,
          firstName,
          lastName,
          setFirstName,
          setLastName,
          handleEditName,
        }}
      />
      <div className="User">
        <h2>
          Welcome back{" "}
          <span>
            {isLoading
              ? "Loading..."
              : `${userData?.firstName ?? "..."} ${
                  userData?.lastName ?? "..."
                }`}
          </span>
        </h2>

        {isLoading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p className="error">Error loading data.</p>
        ) : (
          <>
            <button onClick={handleOpenModal}>Edit Name</button>
            <div className="accounts-zone">
              {accountsData.map((account) => (
                <Account key={account.accountId} dataAccount={account} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default User;
