
import ApiTracker from "../../database/models/count.model.js";
import User from "../../database/models/user.model.js";


export const addDetail = async (req, res) => {
    try {
        const userDetail = req.body;

        if (!userDetail.name || !userDetail.email) {
            return res.status(400).json({ error: 'Name and value are required fields.' });
        }
        const email = userDetail.email
        let existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(403).json({ error: 'Email is already in use' });
        }

        await User.create(userDetail);
        const apiTracker = {
            userName: userDetail.name,
            userEmail: userDetail.email,
            method: req.method,
            url: req.originalUrl,
        }

        await ApiTracker.create(apiTracker)
        res.json({ message: 'User details added successfully!' });

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const updateDetail = async (req, res) => {
    try {
        const userDetail1 = req.body;
        const name = userDetail1.name;
        const email = userDetail1.email;

        if (!email || !name) {
            return res.status(400).json({ error: 'Name and Email are required fields.' });
        }
        const updatedData = {
            name: name,
            email: email
        }

        const detail = await User.findOne({ email: email });
        if (!detail) {
            return res.status(404).json({ message: 'User not found!' });
        }
        await User.findOneAndUpdate({ email: email }, updatedData, { new: true });

        const apiTracker = {
            userName: updatedData.name,
            userEmail: updatedData.email,
            method: req.method,
            url: req.originalUrl,
        }

        console.log(apiTracker)
        await ApiTracker.create(apiTracker)
        console.log('hjcsdbcjkhacolajdclfejvos')
        res.json({ message: 'User detail updated successfully!' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const getCount = async (req, res) => {
    try {
        const email = req.query.email

        if (!email) {
            return res.status(400).json({ error: 'Email parameter is required.' });
          }
            
        const counts = await ApiTracker.aggregate([
            { $match: { userEmail: email } },
            {
              $group: {
                _id: '$method',
                totalCount: { $sum: 1 },
              },
            },
          ]);

          if (!counts) {
            return res.status(404).json({ error: 'User not found.' });
          }

        const data = counts.reduce((acc, item) => {
            if (item._id === 'POST') {
                acc.addCount = item.totalCount;
            } else if (item._id === 'PUT') {
                acc.updateCount = item.totalCount;
            }
            return acc;
        }, { addCount: 0, updateCount: 0 });

        res.json({ data });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const getDetails = async (req, res) => {
    try {
        const data = await User.find();
        res.json(data);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}