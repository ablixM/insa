// user.ts

import User from '../entities/user';
import { FetchResponse } from '../services/api-client';
import roles from './roles'; 

const userData: FetchResponse<User> =  {
    results: [
        {
            id: 1,
            email: 'john.doe@example.com',
            name: 'John Doe',
            username: 'john_doe',
            roleId: 1, 
            role: [roles.results.find((role) => role.id === 1)!], 
            createdAt: '2024-11-01T10:15:30Z',
            updatedAt: '2024-11-15T12:20:45Z',
            deletedAt: '',
          },
          {
            id: 2,
            email: 'jane.smith@example.com',
            name: 'Jane Smith',
            username: 'jane_smith',
            roleId: 2, // Matches the role id for Editor
            role: [roles.results.find((role) => role.id === 2)!],
            createdAt: '2024-09-12T09:10:00Z',
            updatedAt: '2024-11-14T14:25:30Z',
            deletedAt: '',
          },
          {
            id: 3,
            email: 'mike.johnson@example.com',
            name: 'Mike Johnson',
            username: 'mike_johnson',
            roleId: 3, // Matches the role id for Author
            role: [roles.results.find((role) => role.id === 3)!],
            createdAt: '2024-10-05T13:40:15Z',
            updatedAt: '2024-11-13T16:50:25Z',
            deletedAt: '',
          },
          {
            id: 4,
            email: 'sara.lee@example.com',
            name: 'Sara Lee',
            username: 'sara_lee',
            roleId: 4, // Matches the role id for Contributor
            role: [roles.results.find((role) => role.id === 4)!],
            createdAt: '2024-08-21T15:20:50Z',
            updatedAt: '2024-11-10T10:30:35Z',
            deletedAt: '',
          },
          {
            id: 5,
            email: 'alex.brown@example.com',
            name: 'Alex Brown',
            username: 'alex_brown',
            roleId: 5, // Matches the role id for Subscriber
            role: [roles.results.find((role) => role.id === 5)!],
            createdAt: '2024-07-25T11:05:20Z',
            updatedAt: '2024-11-12T18:15:40Z',
            deletedAt: '',
          },
        
    ]
}

export default userData;



