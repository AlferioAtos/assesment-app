export const getVehicles = () => new Promise((resolve) =>
{
    setTimeout(() =>
    {
        resolve([
            {
                "product": "Sport Bike",
                "finishes": [
                    {
                        "finish": "Mate Yellow",
                        "price": 68435
                    },
                    {
                        "finish": "Metallic Black",
                        "price": 132682
                    },
                    {
                        "finish": "Mate Black",
                        "price": 134128
                    },
                    {
                        "finish": "Metallic white",
                        "price": 116669
                    },
                    {
                        "finish": "Mate White",
                        "price": 136254
                    },
                    {
                        "finish": "Metallic Grey",
                        "price": 95241
                    },
                    {
                        "finish": "Mate Grey",
                        "price": 141966
                    }
                ]
            },
            {
                "product": "Sport Sedan",
                "finishes": [
                    {
                        "finish": "Mate Yellow",
                        "price": 64794
                    },
                    {
                        "finish": "Metallic Black",
                        "price": 75437
                    },
                    {
                        "finish": "Mate Black",
                        "price": 77208
                    },
                    {
                        "finish": "Metallic white",
                        "price": 70688
                    },
                    {
                        "finish": "Mate White",
                        "price": 56405
                    },
                    {
                        "finish": "Metallic Grey",
                        "price": 100604
                    },
                    {
                        "finish": "Mate Grey",
                        "price": 138687
                    }
                ]
            },
            {
                "product": "Sport hatchback",
                "finishes": [
                    {
                        "finish": "Mate Yellow",
                        "price": 53576
                    },
                    {
                        "finish": "Metallic Black",
                        "price": 57391
                    },
                    {
                        "finish": "Mate Black",
                        "price": 87976
                    },
                    {
                        "finish": "Metallic white",
                        "price": 51796
                    },
                    {
                        "finish": "Mate White",
                        "price": 97275
                    },
                    {
                        "finish": "Metallic Grey",
                        "price": 94178
                    },
                    {
                        "finish": "Mate Grey",
                        "price": 92001
                    }
                ]
            },
            {
                "product": "Compact Bike",
                "finishes": [
                    {
                        "finish": "Mate Yellow",
                        "price": 99858
                    },
                    {
                        "finish": "Metallic Black",
                        "price": 79787
                    },
                    {
                        "finish": "Mate Black",
                        "price": 84710
                    },
                    {
                        "finish": "Metallic white",
                        "price": 110541
                    },
                    {
                        "finish": "Mate White",
                        "price": 95229
                    },
                    {
                        "finish": "Metallic Grey",
                        "price": 64441
                    },
                    {
                        "finish": "Mate Grey",
                        "price": 55976
                    }
                ]
            },
            {
                "product": "Compact Sedan",
                "finishes": [
                    {
                        "finish": "Mate Yellow",
                        "price": 115253
                    },
                    {
                        "finish": "Metallic Black",
                        "price": 147046
                    },
                    {
                        "finish": "Mate Black",
                        "price": 52750
                    },
                    {
                        "finish": "Metallic white",
                        "price": 68795
                    },
                    {
                        "finish": "Mate White",
                        "price": 126965
                    },
                    {
                        "finish": "Metallic Grey",
                        "price": 95783
                    },
                    {
                        "finish": "Mate Grey",
                        "price": 141145
                    }
                ]
            },
            {
                "product": "Compact hatchback",
                "finishes": [
                    {
                        "finish": "Mate Yellow",
                        "price": 65717
                    },
                    {
                        "finish": "Metallic Black",
                        "price": 110766
                    },
                    {
                        "finish": "Mate Black",
                        "price": 54677
                    },
                    {
                        "finish": "Metallic white",
                        "price": 118632
                    },
                    {
                        "finish": "Mate White",
                        "price": 79512
                    },
                    {
                        "finish": "Metallic Grey",
                        "price": 145948
                    },
                    {
                        "finish": "Mate Grey",
                        "price": 125644
                    }
                ]
            },
            {
                "product": "Convertible Sedan",
                "finishes": [
                    {
                        "finish": "Mate Yellow",
                        "price": 107086
                    },
                    {
                        "finish": "Metallic Black",
                        "price": 65586
                    },
                    {
                        "finish": "Mate Black",
                        "price": 86013
                    },
                    {
                        "finish": "Metallic white",
                        "price": 64538
                    },
                    {
                        "finish": "Mate White",
                        "price": 143189
                    },
                    {
                        "finish": "Metallic Grey",
                        "price": 79950
                    },
                    {
                        "finish": "Mate Grey",
                        "price": 71993
                    }
                ]
            }
        ]);
    }, 1000 * Math.random());
});

export const getAddons = () => new Promise((resolve) =>
{
    setTimeout(() =>
    {
        resolve([
            {
                "upgrade": "Suspension Upgrades",
                "price": 939
            },
            {
                "upgrade": "Turbocharger",
                "price": 531
            },
            {
                "upgrade": "Sport Seats",
                "price": 1174
            },
            {
                "upgrade": "Window Tint",
                "price": 1492
            },
            {
                "upgrade": "Underbody Neon Lights",
                "price": 1226
            }
        ]);
    }, 1000 * Math.random());
});