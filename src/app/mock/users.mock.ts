import { User } from './../shared/types/user.interface';

const MOCK_USERS: User[] = [
    {
        id: 1,
        name: 'Leo',
        username: 'leo',
        password: '1234',
        role: 'admin',
        accounts: []
    },
    {
        id: 2,
        name: 'Karen',
        username: 'karen',
        password: '1234',
        role: 'admin',
        accounts: []
    },
    {
        id: 3,
        name: 'Jovan',
        username: 'jovan',
        password: '1234',
        role: 'user',
        accounts: []
    }
];

export { MOCK_USERS };
