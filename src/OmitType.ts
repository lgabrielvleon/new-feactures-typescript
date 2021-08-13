type User = {
    name;
    date;
    location;
}

type Guest = Omit<User, "name">;