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
      userId: userId
     }
})
		.then(data => {
      const nums = Array.from(Array(7).keys())
    const lastSevenDates = [...nums].map((_, i) => {
        const d = new Date()
        d.setDate(d.getDate() - i)
        return d
    }).map((date) => {
      return date.toLocaleDateString()
    }).reverse()
      

      function sum(prev, next){
        return prev + next;
      }

      // const groups = data.reduce((groups, foodEntry) => {
      //   let date = foodEntry.date.toLocaleDateString();
      //   if (!groups[date]) {
      //     groups[date] = [];
      //   }
      //   groups[date].push(foodEntry);
      //   return groups;
      // }, {});

      const groups = {}

      // Add the remaining dates in the last 7 days (if User didn't put in an entry)
      lastSevenDates.map((day) => {
        var dateHasData = data.some(e => e.date.toLocaleDateString() == day)
        if (!dateHasData) {
          groups[day] = []
          return
        }

        const dayEntries = data.filter(e => e.date.toLocaleDateString() == day)
        groups[day] = dayEntries
        
      })
      
      // Edit: to add it in the array format instead
      const groupArrays = Object.keys(groups).map((date) => {
        if (groups[date].length == 0) {
          return {
            date,
            foodEntries: [],
            totalCalories: null
          };
        }
        const foodEntries = groups[date]
        const totalCalories = foodEntries.map(e => e.calories).reduce(sum)
        return {
          date,
          foodEntries: foodEntries,
          totalCalories: totalCalories
        };
      });


      
      console.log(groupArrays);
      res.json(groupArrays)
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

    FoodEntry.create(req.body).then(data => {
      return res.json(data)
    }).catch(err => {
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
