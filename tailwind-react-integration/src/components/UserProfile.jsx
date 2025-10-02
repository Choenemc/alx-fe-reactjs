function UserProfile() {
    return (
        <div classname="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
            <img
            src="https://via.placeholder.com/150"
            alt="user"
            classname="w-60 h-36 rounded-full m-auto"
            />
            <h1 classname="text-xl text-blue-800 my-4">john Doe</h1>
            <p classname="text-gray-600 text-base">
                developer at example Co. Loves to write code and explore new technologies
            </p>
        </div>
    )
}

export default UserProfile;