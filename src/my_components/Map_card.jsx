/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // to handle navigation
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/Button'

export default function Signup() {
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const navigate = useNavigate(); 

    const handleGoClick = () => {
        // Here you can process the input or do something with it
        // Then navigate to the desired page, e.g., "/results"
        console.log('From:', fromLocation, 'To:', toLocation); // for debugging

        // You can pass the data to the new route if needed
        navigate(`/results?from=${fromLocation}&to=${toLocation}`);
    };

    return (
        <div className="">
            <div>
                <Card className='h-2px w-80 border border-primary m-10 pr-2 rounded-t-2xl rounded-l-2xl'>
                    <CardHeader>
                        <CardTitle className='text-xl flex justify-center'>NaviX</CardTitle>
                        <div className="flex justify-center mt-1">___________________</div>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Label className='flex pb-1 pl-1 text-lg'>From</Label>
                        <Input
                            placeholder='From'
                            type='text'
                            value={fromLocation} // bind input to state
                            onChange={(e) => setFromLocation(e.target.value)} // update state on change
                        />
                        <Label className='flex pt-2 pb-1 pl-1 text-lg'>To</Label>
                        <Input
                            placeholder='To'
                            type='text'
                            value={toLocation} // bind input to state
                            onChange={(e) => setToLocation(e.target.value)} // update state on change
                        />
                        <Button
                            className='mt-5 p-5 rounded-xl flex justify-end'
                            onClick={handleGoClick} // handle click event
                        >
                            Go
                        </Button>
                    </CardContent>
                    <div className="flex justify-center">_______________________________</div>
                    <CardFooter className='flex space-between justify-center '>
                        <div className="h-28 text-sm p-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dicta cupiditate minus, laborum necessitatibus exercitationem 
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
