module.exports = function SortMiddleware(req, res, next){
    res.locals._sort = {
        enabled: false,
        type: 'default'
    };
    //Su dung 1 or 2 cung duoc
    if(req.query.hasOwnProperty('_sort')) {
    //     res.locals._sort.anabled = true;
    //     res.locals._sort.type = req.query.type;
    //     res.locals._sort.column = req.query.column;

        Object.assign(res.locals._sort ,{
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }
    next();
}