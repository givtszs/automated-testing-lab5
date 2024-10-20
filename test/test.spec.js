describe('API Demos test', () => {
    it('should get the current activity', async () => {
        const currentActivity = await driver.getCurrentActivity();
        console.log('Current activity', currentActivity);
    });

    it('should find the "Country" AutoCompleteTextView, input a country name and verify its value', async () => {
        // access the "Views" TextView by the xpath
        const viewsTextView = await $('//android.widget.TextView[@content-desc="Views"]');
        const viewsText = await viewsTextView.getText();
        console.log('Views TextView text:', viewsText);
        expect(viewsText).toEqual('Views');

        // tap on the Views
        viewsTextView.click();

        // access the "Auto Complete" TextView by its accessibility id
        const autoCompleteTextView = await $('~Auto Complete');
        const autoCompleteText = await autoCompleteTextView.getText();
        console.log('Auto Complete TextView text:', autoCompleteText);
        expect(autoCompleteText).toEqual('Auto Complete');

        // tap on the Auto Complete
        autoCompleteTextView.click();

        // access the "Screen Top" TextView by its text
        const screenTopTextView = await $('//*[@text="1. Screen Top"]');
        const screenTopText = await screenTopTextView.getText();
        console.log('Screen Top TextView text:', screenTopText);
        expect(screenTopText).toEqual('1. Screen Top');

        // tap on the Screen Top
        screenTopTextView.click();

        // access the AutoCompleteTextView element using UiSelector
        const selector = 'new UiSelector().resourceId("io.appium.android.apis:id/edit")';
        const autoCompleteTextViewSelector = await $(`android=${selector}`);
        console.log('AutoCompleteTextView text:', await autoCompleteTextViewSelector.getText());
        expect(await autoCompleteTextViewSelector.getText()).toEqual('');


        // input the country name
        const inputValue = 'Ukraine';
        await autoCompleteTextViewSelector.setValue(inputValue);
        console.log('Verify AutoCompleteTextView value:', await autoCompleteTextViewSelector.getText());
        expect(await autoCompleteTextViewSelector.getText()).toEqual(inputValue);
    });


    it('should find and open the "App/Activity/Dialog" Dialog and get its title value', async () => {
        // access the "Views" TextView by the xpath
        const viewsTextView = await $('//android.widget.TextView[@content-desc="Views"]');
        const viewsText = await viewsTextView.getText();
        console.log('Views TextView text:', viewsText);
        expect(viewsText).toEqual('Views');

        // tap on the Views
        viewsTextView.click();

        // access the "Auto Complete" TextView by its accessibility id
        const autoCompleteTextView = await $('~Auto Complete');
        const autoCompleteText = await autoCompleteTextView.getText();
        console.log('Auto Complete TextView text:', autoCompleteText);
        expect(autoCompleteText).toEqual('Auto Complete');

        // tap on the Auto Complete
        autoCompleteTextView.click();

        // access the "Screen Top" TextView by its text
        const screenTopTextView = await $('//*[@text="1. Screen Top"]');
        const screenTopText = await screenTopTextView.getText();
        console.log('Screen Top TextView text:', screenTopText);
        expect(screenTopText).toEqual('1. Screen Top');

        // tap on the Screen Top
        screenTopTextView.click();

        // access the AutoCompleteTextView element using UiSelector
        const selector = 'new UiSelector().resourceId("io.appium.android.apis:id/edit")';
        const autoCompleteTextViewSelector = await $(`android=${selector}`);
        console.log('AutoCompleteTextView text:', await autoCompleteTextViewSelector.getText());
        expect(await autoCompleteTextViewSelector.getText()).toEqual('');


        // input the country name
        const inputValue = 'Ukraine';
        await autoCompleteTextViewSelector.setValue(inputValue);
        console.log('Verify AutoCompleteTextView value:', await autoCompleteTextViewSelector.getText());
        expect(await autoCompleteTextViewSelector.getText()).toEqual(inputValue);
    });
});