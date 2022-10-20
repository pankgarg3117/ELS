
WebDriver driver;
	public void signin() throws InterruptedException {
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://elearningstack.com/");
		driver.findElement(By.cssSelector(
				"a[href='https://elearningstack.com/register/?action=login&redirect_to=/my-account/edit-account/']"))
				.click();
		driver.findElement(By.xpath(
				"//div[@class='xoo-el-form-container xoo-el-form-inline']//div[@class='xoo-el-section xoo-el-section-login xoo-el-active xoo-el-login-ph']//input[@placeholder='Email']"))
				.sendKeys("pankgarg3117@gmail.com");
		driver.findElement(By.name("xoo-el-password")).sendKeys("Admine51%%");
		{
			Thread.sleep(15000);
		}
		driver.findElement(By.cssSelector(
				"div[class='xoo-el-form-container xoo-el-form-inline'] div[class='xoo-el-section xoo-el-section-login xoo-el-active xoo-el-login-ph'] button[type='submit']"))
				.click();
		Thread.sleep(5000);

		/*
		 * WebElement scsalrt =
		 * driver.findElement(By.cssSelector("//div[@class='xoo-el-notice-success '])"))
		 * ; String alertis = scsalrt.getText();
		 * System.out.println("Mandatory  Question wise field error is -" + alertis);
		 */

		System.out.println(driver.getTitle());
		String expectedTitle = "My account - eLearningStack.com";
		String actualTitle = driver.getTitle();
		assertEquals(actualTitle, expectedTitle);
		assertTrue(true);
		Thread.sleep(1000);

		driver.quit();

	}
