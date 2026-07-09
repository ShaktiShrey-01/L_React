import Card1 from "../components/Card1";

export default function Userlist({ users = [], onedit, onDelete, isupdating, isdeleting }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {users.map((user) => (
                <Card1
                    key={user.id}
                    user={user}
                    onedit={() => onedit(user)}
                    onDelete={() => onDelete(user.id)}
                    isupdating={isupdating}
                    isdeleting={isdeleting}
                />
            ))}
        </div>
    );
}