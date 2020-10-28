import { Course } from './course';

describe('Course', () => {

  let course: Course;
  beforeEach(() => { course =  
    {
      id: 1,
      title: 'title',
      creationDate: new Date(),
      duration: 1,
      description: 'description'
    } 
  });

  it('should be an instance', () => {
    expect(course).toBeTruthy();
  });
});
