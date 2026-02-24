AUTH-2: User Model Implementation
Overview

Implemented User schema using Mongoose.

Fields

name → String, required, trimmed

email → String, required, unique, lowercase, trimmed

password → String, required

role → Enum ("user", "admin"), default: "user"

Index

Unique index on email

Verified using:

db.users.getIndexes()
Timestamps

Enabled using:

{ timestamps: true }

Automatically adds:

createdAt

updatedAt

Out of Scope

Register API

Login logic

Password hashing

Status

Server running successfully and MongoDB index verified.
