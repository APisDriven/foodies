const router = require('express').Router();
const { FoodEntry, User } = require('../../models');

// The `/api/foodEntries` endpoint

// get all food entries for userId
router.get('/:userId', (req, res) => {
  // find all food entries
  const userId = req.params.userId
  FoodEntry.findAll({
    where: { userId: userId }
})
		.then(data => res.json(data))
		.catch(err => {
			res.status(401).json(err);
		});
});

// get one food entry
router.get('/:foodEntryId', (req, res) => {
  // find a single foodEntry by its `id`
  const foodEntryId = req.params.foodEntryId
  FoodEntry.findOne({
		where: { id: foodEntryId }
	})
		.then(data => res.json(data))
		.catch(err => {
			res.status(401).json(err);
		});
});


// get all food entries for userId for date range
router.post('/foodEntries_by_date', (req, res) => {
  // find all food entries

    /* req.body should look like this...
    {
      from: startDate,
      to: endDate,
      userId: userId
    }
  */

  const userId = req.session.user_id
  const fromDate = req.body.from
  const toDate =  req.body.to
  FoodEntry.findAll({
    where: { 
      userId: userId,
      date: {
        $between: [
          fromDate,
          toDate
        ]
      }
     }
})
		.then(data => res.json(data))
		.catch(err => {
			res.status(401).json(err);
		});
});


// get all food entries for userId for past 7 days
router.post('/calories_last_week', (req, res) => {

  const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));
 
  const userId = req.session.user_id

  FoodEntry.findAll({
    where: { 
      userId: userId,
      // date: {
      //   $gte: sevenDaysAgo
      // }
     }
})
		.then(data => {
      function sum(prev, next){
        return prev + next;
      }

      const groups = data.reduce((groups, foodEntry) => {
        const date = foodEntry.date.toISOString().split('T')[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(foodEntry);
        return groups;
      }, {});
      
      // Edit: to add it in the array format instead
      const groupArrays = Object.keys(groups).map((date) => {
        const foodEntries = groups[date]
        const totalCalories = foodEntries.map(e => e.calories).reduce(sum)
        return {
          date,
          foodEntries: foodEntries,
          totalCalories: totalCalories
        };
      });


      
      console.log(groupArrays);
      res.json(data)
    })
		.catch(err => {
			res.status(401).json(err);
		});
});

// create new food entry
router.post('/saveFoodEntry', (req, res) => {
  /* req.body should look like this...
    {
      name: "hot dog",
      calories: 200.00,
    }
  */

    const today = new Date()
    req.body['date'] = today;

    const userId = req.session.user_id
    req.body['userId'] = userId

    FoodEntry.create(req.body).then(data => res.json(data)).catch(err => {
      res.status(401).json(err)
    })

});

// update food entry
router.put('/:id', (req, res) => {
  // update food entry data
  const updateId = req.params.id
  const update = req.body
  FoodEntry.update(update, {
    where: { id: updateId}
  }).then(data => {
    if (! data.length > 0) {
      res.status(404).json({'Message': 'There is no category with that id'})
    }
    res.json(data)
  })
});

router.delete('/:id', (req, res) => {
  // delete one food entry by its `id` value
  const deleteId = req.params.id
  FoodEntry.destroy({
		where: { id: deleteId }
	}).then(data => {
		if (!data) {
			res.status(404).json({ Message: `No product found with id ${deleteId}` });
			return;
		}
    
		res.json(data);
	});
});

module.exports = router;
