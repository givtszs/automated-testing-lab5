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


        await driver.back();
        await driver.back();
        await driver.back();
    });


    it('should find and open the "App/Activity/Dialog" Dialog and get its title value', async () => {
        // access the "App" TextView
        const appTextView = await $('//android.widget.TextView[@content-desc="App"]');
        expect(await appTextView.getText()).toEqual('App');
        await appTextView.click();

        // access the "Activity" TextView 
        const activityTextView = await $('~Activity');
        expect(await activityTextView.getText()).toEqual('Activity');
        await activityTextView.click();

        // access the "Dialog" TextView 
        const dialogTextView = await $('~Dialog');
        expect(await dialogTextView.getText()).toEqual('Dialog');
        await dialogTextView.click();

        // access the dialog title TextView
        const titleSelector = 'new UiSelector().resourceId("android:id/title")';
        const titleTextView = await $(`android=${titleSelector}`);
        expect(await titleTextView.getText()).toEqual('App/Activity/Dialog');
 
        // access the dialog 'Add content' button
        const buttonSelector = 'new UiSelector().resourceId("io.appium.android.apis:id/add")';
        const button = await $(`android=${buttonSelector}`);
        expect(await button.getText()).toEqual('Add content');
        await button.click();

        const imageView = await $('//android.widget.LinearLayout[@resource-id="io.appium.android.apis:id/inner_content"]/android.widget.ImageView');
        expect(await imageView.isDisplayed()).toBe(true);

        await driver.back();
        await driver.back();
        await driver.back();
    });

    it('should find the "Checkbox preference" checkbox and uncheck it', async () => {
        // access the "Preference" TextView
        const preferenceTextView = await $('~Preference');
        expect(await preferenceTextView.getText()).toEqual('Preference');
        await preferenceTextView.click();

        // access the "Default values" TextView 
        const defaultValuesTextView = await $('~4. Default values');
        expect(await defaultValuesTextView.getText()).toEqual('4. Default values');
        await defaultValuesTextView.click();

        // access the checkbox
        const checkboxSelector = 'new UiSelector().resourceId("android:id/checkbox")';
        const checkbox = await $(`android=${checkboxSelector}`);
        expect(await checkbox.getAttribute('checked')).toEqual('true');

        // change its value
        await checkbox.click();
        expect(await checkbox.getAttribute('checked')).toBe('false');

        await driver.back();
        await driver.back();
    });
});