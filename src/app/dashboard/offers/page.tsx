"use client";

import React, { useEffect, useState } from "react";
import {
    getCurrentDiscount,
    getAllDiscounts,
    createOrUpdateDiscount,
    removeDiscount,
} from "@/services/admin-stripe";

import {
    Box,
    Typography,
    Grid,
    Stack,
    Button,
    TextField,
    Switch,
    Card,
    CardContent,
    CardHeader,
    Divider,
} from "@mui/material";
    

export default function StripeDiscountPage() {
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState<any>(null);
    const [all, setAll] = useState<any[]>([]);
    const [form, setForm] = useState({
        percentage: 0,
        name: "",
        isActive: true,
    });

    useEffect(() => {
        refreshData();
    }, []);

    const refreshData = async () => {
        setLoading(true);
        try {
            const [cur, allConfigs] = await Promise.all([
                getCurrentDiscount(),
                getAllDiscounts(),
            ]);
            setCurrent(cur);
            setAll(allConfigs);
        } catch (e) {
            console.error("Error fetching discounts", e);
        } finally {
            setLoading(false);
        }
    };
    const handleSubmit = async () => {
        if (!form.name) return alert("Name is required");
        if (form.percentage < 1 || form.percentage > 100)
            return alert("Percentage must be between 1 and 100");

        await createOrUpdateDiscount(form);
        await refreshData();
    };
    const handleRemove = async () => {
        await removeDiscount();
        await refreshData();
    };

    return (
        <Box
            sx={{
                maxWidth: "var(--Content-maxWidth)",
                m: "var(--Content-margin)",
                p: "var(--Content-padding)",
                width: "var(--Content-width)",
            }}
        >
            <Stack spacing={4}>
                <Typography variant="h4">Stripe Discount Management</Typography>

                {/* Current Discount */}
                <Card>
                    <CardHeader title="Current Active Discount" />
                    <Divider />
                    <CardContent>
                        {loading ? (
                            <Typography>Loading...</Typography>
                        ) : current && current.isActive ? (
                            <Stack spacing={2}>
                                <Typography>
                                    <b>{current.name}</b> - {current.percentage}% OFF
                                </Typography>
                                <Typography>Status: Active</Typography>
                                <Button variant="outlined" color="error" onClick={handleRemove}>
                                    Remove Discount
                                </Button>
                            </Stack>
                        ) : (
                            <Typography>No active discount found</Typography>
                        )}

                    </CardContent>
                </Card>

                {/* Create / Update Discount */}
                <Card>
                    <CardHeader title="Create / Update Discount" />
                    <Divider />
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    label="Discount Name"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    type="number"
                                    label="Percentage"
                                    value={form.percentage}
                                    onChange={(e) =>
                                        setForm({ ...form, percentage: Number(e.target.value) })
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Typography>Inactive</Typography>
                                    <Switch
                                        checked={form.isActive}
                                        onChange={(e) =>
                                            setForm({ ...form, isActive: e.target.checked })
                                        }
                                    />
                                    <Typography>Active</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box mt={2}>
                            <Button variant="contained" onClick={handleSubmit}>
                                Save Discount
                            </Button>
                        </Box>
                    </CardContent>
                </Card>

                {/* All Discounts */}
                <Card>
                    <CardHeader title="All Discounts" />
                    <Divider />
                    <CardContent>
                        {loading ? (
                            <Typography>Loading...</Typography>
                        ) : all.length > 0 ? (
                            <Stack spacing={1}>
                                {all.map((d, i) => (
                                    <Typography key={i}>
                                        {d.name} - {d.percentage}% ({d.isActive ? "Active" : "Inactive"})
                                    </Typography>
                                ))}
                            </Stack>
                        ) : (
                            <Typography>No discounts found</Typography>
                        )}
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
}
