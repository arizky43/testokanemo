var v = new Vue({
    el: '#sectionApp',
    data: {
        textInitial: '',
        textAskMe: '',
        description: '',
        defaultValue: {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        },
        stringValue: [],
        stringValueRaw: [],
        finalValue: ''
    },
    created() {

    },
    mounted() {

    },
    methods: {
        async initValue() {
            try {
                const splitInitialString = v.textInitial.split(' ');
                for (let i = 0; i < splitInitialString.length; i++) {
                    if (splitInitialString[i].toLowerCase() === 'is') {
                        if (!v.defaultValue.hasOwnProperty(splitInitialString[i + 1]))
                            throw new Error(`${splitInitialString[i + 1]} is not symbol!`);
                        v.stringValue.push({
                            stringIndex: i - 1,
                            string: splitInitialString[i - 1],
                            value: v.defaultValue[splitInitialString[i + 1]]
                        });
                    }
                }
                v.stringValueRaw.push(v.textInitial);
                v.textInitial = '';
            } catch (err) {
                alert(err.message);
            }
        },
        async checkValue() {
            try {
                v.finalValue = '';
                const splitInitialString = v.textAskMe.split(' ');
                let totalValue = 0;
                let indexingValue = [];
                for (let i = 0; i < splitInitialString.length; i++) {
                    if (splitInitialString[i].toLowerCase() === 'is') {
                        for (let j = (i + 1); j < splitInitialString.length; j++) {
                            const check = v.stringValue.filter(item => {
                                return item.string === splitInitialString[j];
                            });
                            if (!check.length) throw new Error('I have no idea what you are talking about');
                            indexingValue.push(check[0].value);

                            v.finalValue += ' ' + splitInitialString[j];
                        }
                    }
                }

                let newIndexingValue = [];
                let nextValueIsUsed = false;
                for (let i = 0; i < indexingValue.length; i++) {
                    if (i !== indexingValue.length) {
                        if (!nextValueIsUsed) {
                            if (indexingValue[i] < indexingValue[i + 1]) {
                                newIndexingValue.push(indexingValue[i + 1] - indexingValue[i]);
                                nextValueIsUsed = true;
                            } else {
                                newIndexingValue.push(indexingValue[i]);
                                nextValueIsUsed = false;
                            }
                        }
                    } else {
                        if (!nextValueIsUsed) {
                            newIndexingValue.push(indexingValue[i]);
                        }
                    }
                }

                newIndexingValue.map(item => {
                    totalValue += item;
                });

                v.finalValue += ` is ${totalValue}`;
            } catch (err) {
                alert(err.message);
            }
        }
    }
});