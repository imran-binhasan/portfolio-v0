

import {Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,

} from '@/components/ui/card'
import { Blocks, GanttChartSquare, Gem } from 'lucide-react';
const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: 'Web Design',
        description: 'I design repsonsive website lorem4 ejfsbdbbvdfjb fbjfkb  jnsdfjfnbf'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8}/>,
        title: 'Web Development',
        description: 'I design repsonsive website lorem4 ejfsbdbbvdfjb fbjfkb  jnsdfjfnbf'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8}/>,
        title: 'App Development',
        description: 'I design repsonsive website lorem4 ejfsbdbbvdfjb fbjfkb  jnsdfjfnbf'
    },
]


const Services = () => {
    return (
        <section className='mb-12 lg:mb-26'>
            <div className="container mx-auto">
                <h2 className="section-title mb-12 lg:mb-18 text-center mx-auto">
                    My Services
                </h2>
                <div className='grid lg:grid-cols-3 justify-center gap-y-12 lg:gap-y-8 mx-auto text-center'>
                    {servicesData.map((item,index) => {
                        return <Card className='w-full max-w-[404px] h-[300px] flex flex-col pt-12 pb-8 justify-center mx-auto items-center relative' key={index}>
                            <CardHeader className='absolute text-primary -top-[60px]'>
                                <div className='w-[140px] h-[80px]  bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-3'>
                                    {item.title}
                                </CardTitle>
                                <CardDescription className='text-lg'>
                                {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;