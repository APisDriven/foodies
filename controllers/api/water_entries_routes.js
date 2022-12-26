const router = require('express').Router();
const { WaterEntry, User } = require('../../models');

// The `/api/foodEntries` endpoint

// get all water entries for userId
router.get('/:userId', (req, res) => {
  // find all water entries
  const userId = req.params.userId
  WaterEntry.findAll({
    where: { userId: userId }
})
		.then(data => res.json(data))
		.catch(err => {
			res.status(401).json(err);
		});
});

// get one food entry
router.get('/:waterEntryId', (req, res) => {
  // find a single foodEntry by its `id`
  const waterEntryId = req.params.waterEntryId
  WaterEntry.findOne({
		where: { id: waterEntryId }
	})
		.then(data => res.json(data))
		.catch(err => {
			res.status(401).json(err);
		});
});

// create new water entry
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      name: "hot dog",
      calories: 200.00,
      date: '',
      userId: 2
    }
  */

    WaterEntry.create(req.body).then(data => res.json(data)).catch(err => {
      res.status(401).json(err)
    })

});

// get all water entries for userId for date range
router.post('/waterEntries_by_date', (req, res) => {
  // find all water entries

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


// get all water entries for userId for past 7 days
router.get('/waterEntries_last_week', (req, res) => {

  const date = new Date();
  date.setDate(date.getDate() - 7)
 
  const userId = req.body.userId

  WaterEntry.findAll({
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

// update water entry
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
  // delete one water entry by its `id` value
  const deleteId = req.params.id
  WaterEntry.destroy({
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
