import * as fromCourses from './courses.actions';

describe('loadCoursess', () => {
  it('should return an action', () => {
    expect(fromCourses.loadCoursess().type).toBe('[Courses] Load Coursess');
  });
});
