import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
    const { tittle, description, price, address, city, country, image, facilities, userEmail } = req.body.data;
    console.log(req.body.data)
    try {
        const residency = await prisma.residency.create({
            data: {
                tittle,
                description,
                price,
                address,
                city,
                country,
                image,
                facilities,
                owner: { connect: { email: userEmail } },
            },
        });
        res.send({ message: "Residency created successfully", residency })
    } catch (err) {
        if (err.code === "P2002") {
            throw new Error("Residency already exists");
        }
        throw new Error(err.message);
    }
});

// function to get all residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
    const residencies = await prisma.residency.findMany({
        orderBy: { createdAt: "desc" },
    });

    res.send(residencies);
});

// function to get a specific residency
export const getResidency = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const residency = await prisma.residency.findUnique({
            where: { id },
        });
        res.send(residency);
    } catch (err) {
        throw new Error(err.message);
    }
})