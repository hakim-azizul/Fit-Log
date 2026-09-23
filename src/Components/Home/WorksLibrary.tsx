import React from 'react';
import IWork from '@/types/workType';
import WorkoutCard from '@/Components/Home/WorkCard';


export const getWorkData = async() =>{
    try{
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
        const data = await res.json()
        return data;
    } catch(error){
        console.error("Data fetching Unsuccesfull", error);
        return[]
    }
}

const WorksPage = async() => {

    const works: IWork[] = await getWorkData();
    return (
        <div className='container mx-auto py-10'>
            <div>
                <h1 className='text-3xl text-white font-oswald font-bold'>THE LIBRARY</h1>
                <p className='text-[#9CA3AF] text-lg font-inter'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    works.map((work: IWork) => <WorkoutCard key={work.id} work={work}/>)
                }
            </div>
            
        </div>
    );
};

export default WorksPage;