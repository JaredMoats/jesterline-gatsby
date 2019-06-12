import React, { useEffect } from 'react';
import Layout from "../components/layout";

const discord = () => {

    useEffect(() => {
        window.location = "https://discord.gg/r27uT6f";
    }, []);

    return (
        <Layout>
            
        </Layout>
    )
}

export default discord;
