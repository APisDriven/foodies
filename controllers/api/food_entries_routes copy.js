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

  const userId = req.body.userId
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
router.get('/foodEntries_last_week', (req, res) => {

  const date = new Date();
  date.setDate(date.getDate() - 7)
 
  const userId = req.body.userId

  FoodEntry.findAll({
    where: { 
      userId: userId,
      date: {
        $gt: date.toISOString
      }
     }
})
		.then(data => res.json(data))
		.catch(err => {
			res.status(401).json(err);
		});
});

// create new food entry
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      name: "hot dog",
      calories: 200.00,
      date: '',
      userId: 2
    }
  */

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
