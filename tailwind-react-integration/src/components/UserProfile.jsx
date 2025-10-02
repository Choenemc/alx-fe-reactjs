function UserProfile() {
    return (
        <div classname="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
            <img
            src="https://via.placeholder.com/150"
            alt="user"
            classname="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full m-auto"
            />
            <h1 classname="text-lg sm:text-lg md:text-xl text-blue-800 my-4">
                john Doe
            </h1>
            <p classname="text-sm sm:text-sm md:text-base text-gray-600">
                developer at example Co. Loves to write code and explore new technologies
            </p>
        </div>
    )
}

export default UserProfile;