# Anywhere Fitness API

## Users 

## Register: .post(api/auth/register)

Required: {
    name: (string),
    email: (string),
    username: (string),
    password: (string),
    role_id: (integer 1=user, 2=instructor, 3=admin)
}

## Login: .post(api/auth/login)

Required: {
    username: (string),
    password: (string)
}


# Users - Must be logged in to access

## Get all users: .get(api/users)

## Get user by id: .get(api/users/:id)

## Delete user: .delete(api/users/:id)


# Classes - must be logged in to access

## Get all classes: .get(api/classes)

## Get class by id: .get(api/classes/:id)

## Create a class: .post(api/classes) - must be an instructor to create a class

Required: {
    class_name: (string),
    class_type: (string),
    class_date: (string),
    class_start_time: (string),
    class_duration: (string),
    class_intensity: (string),
    class_location: (string),
    registered_participants: (integer),
    class_max_participants: (integer)
}

## Edit a class .put(api/classes/:id) - must be instructor to edit a class

Required: same as creating a class

## Delete a class .delete(api/classes/:id) - must be instructor to delete a class