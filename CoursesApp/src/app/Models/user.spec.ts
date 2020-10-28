import { User } from './user';

describe('User', () => {

  let user: User;
  beforeEach(() => { user =  
    {
      id: 'id',
      firstName: 'first_name',
      lastName: 'last_name'
    } 
  });

  it('should be an instance', () => {
    expect(user).toBeTruthy();
  });
});
