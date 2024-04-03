import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { getGraphApi } from "../../../services/authService.js";


const index = ({tottalAmount}) => {
    const chartRef = useRef(null);
    const [firstName, setFisrtName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [userData, setuserData] = useState(null);
    const [graphData, setGraphData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const authdata = localStorage.getItem('user_data')
        if (authdata) {
            const user = JSON.parse(authdata)
            setFisrtName(user?.first_name)
            setlastName(user?.last_name)
            setEmail(user?.email)
            setProfilePic(user?.profile_pic)
            setuserData(user)
        }

        const AUTH_DATA = authdata ? JSON.parse(authdata) : null
        var TOKEN = AUTH_DATA ? 'Token ' + AUTH_DATA?.token : null

        getGraphApi(TOKEN)

            .then((resp) => {

                setIsLoading(false);
                if (resp?.data?.status == 200) {

                    setGraphData(resp?.data?.data);
                } else {
                    toastId.current = toast.error(resp?.data?.message);
                }
            })
            .catch((error) => {
                setIsLoading(false);
                toastId.current = toast.error(error);
            });




        // Mock data for the pie chart
        const data = {
            labels: graphData.labels,
            datasets: [{
                data: graphData.value,
                backgroundColor: ['#B79600', '#163454'], // Custom colors
                hoverOffset: 20, // Add some hover effect
                borderWidth: 5, // Remove border
            }]
        };
        const columnData = {
            labels: ['Category 1', 'Category 2', 'Category 3'],
            datasets: [{
                label: 'Data',
                data: [50, 100, 150],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                borderWidth: 1
            }]
        };

        // Get the context of the canvas element where the chart will be drawn
        const ctx = document.getElementById('myPieChart').getContext('2d');

        // If chartRef current value exists (meaning there's a chart already), destroy it
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Create the pie chart
        chartRef.current = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {
                plugins: {
                    legend: {
                        position: 'top', // Place legend at the top
                        align: 'start', // Align legend items to the start
                        labels: {
                            boxWidth: 20, // Width of each legend item box
                            usePointStyle: true // Use custom point style (similar to dataset point styles)
                        },
                        display: true,
                    },
                },
            },
        });

        // Cleanup function to destroy the chart when component unmounts
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [tottalAmount]);

    console.log(graphData.value,">>>>>>>>")
    return (

        <>
            <aside className="col-lg-3">

                {/* <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                    <div className="profile-thumb mt-3 mb-4">

                        <img
                            height={100}
                            width={100}
                            className="rounded-circle" src={profilePic ?? "/src/assets/images/profile-thumb.jpg"} alt="" />
                       
                    </div>
                    <p className="text-3 fw-500 mb-2">Hello, {userData?.first_name} {userData?.last_name}</p>
                </div> */}
                <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                    <h4 className="text-4  mb-3">Distribution of Money</h4>
                    <hr></hr>

                    <canvas id="myPieChart"></canvas>
                </div>
                


            </aside>
        </>

    );
};
export default index;