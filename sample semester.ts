export let sampleJson: any = {
    "semesters":
    [
        {
            "year": 2017,
            "session": "Spring",
            "id": 1,
	        "courses":
	        [
		        {
                    "name": "CECS 150",
                    "hours": 4,
                    "scaleType": "letter",
                    "gradeScale": [60, 70, 80, 90],
                    "gradeGroups":
                        [
                            {
                                "name": "Homework",
                                "weight": 100,
                                "numGrades": 2,
                                "grades":
                                    [
                                        {
                                            "name": "HW 1",
                                            "totalPoints": 150,
                                            "pointsEarned": 144
                                        },
                                        {
                                            "name": "HW 2",
                                            "totalPoints": 200,
                                            "pointsEarned": null
                                        }
                                    ]
                            }
                        ]
                    
                },
                {
                    "name": "CECS 250",
                    "hours": 4,
                    "scaleType": "plusMinus",
                    "gradeScale": [60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93, 97],
                    "gradeGroups":
                        [
                            {
                                "name": "Homework",
                                "weight": 100,
                                "numGrades": 2,
                                "grades":
                                    [
                                        {
                                            "name": "HW 1",
                                            "totalPoints": 150,
                                            "pointsEarned": 144
                                        },
                                        {
                                            "name": "HW 2",
                                            "totalPoints": 200,
                                            "pointsEarned": null
                                        }
                                    ]
                            }
                        ]
            
                }
            ]
        }
    ]
	
	
}
