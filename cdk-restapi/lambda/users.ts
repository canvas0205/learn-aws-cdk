import { APIGatewayProxyEvent } from 'aws-lambda';

const USERS = [
  { id: "1", name: "Ichirou" },
  { id: "2", name: "Zirou" },
  { id: "3", name: "Saburou" },
]

// GET /users
export const getUsersHandler = async(event: APIGatewayProxyEvent) => {
  console.log("getUsersHandler")
  return {
    statusCode: 200,
    body: JSON.stringify(USERS),
  };
}

// GET /users/{id}
export const getUserHandler = async(event: APIGatewayProxyEvent) => {
  console.log("getUserHandler")
  const id = event.pathParameters?.["id"]
  return {
    statusCode: 200,
    body: JSON.stringify(USERS.find((user) => user.id == id)),
  };
}