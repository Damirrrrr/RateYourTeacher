export interface Teacher{
    id: number;
    fullname: string;
    university: string;
    rating: number;
    discipline: string;
    degree: string;
    description: string;
    url: string;
}

export const teachers = [
    {
      id: 1,
      fullname: 'Bobur Mukhsimbayev',
      university : 'KBTU',
      img : "",
      rating: 5,
      description: 'asdfgh',
      url: 'https://github.com/bobur554396'
  },
  {
      id: 2,
      fullname: 'Beisenbek Baisakov',
      university : 'KBTU',
      img : "",
      rating: 5,
      description: 'asdfgh',
      url: 'https://github.com/Beisenbek'
  }
  ]