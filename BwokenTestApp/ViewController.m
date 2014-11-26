//
//  ViewController.m
//  BwokenTestApp
//
//  Created by Ryan Mathews on 11/26/14.
//  Copyright (c) 2014 Ryan Mathews. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UILabel *welcomeLabel;
- (IBAction)universalButtonTapped:(id)sender;
- (IBAction)iPadButtonTapped:(id)sender;
- (IBAction)iPhoneButtonTapped:(id)sender;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)universalButtonTapped:(id)sender {
    self.welcomeLabel.text = @"Universal Button Pushed";
}

- (IBAction)iPadButtonTapped:(id)sender {
    self.welcomeLabel.text = @"iPad Button Pushed";
}

- (IBAction)iPhoneButtonTapped:(id)sender {
    self.welcomeLabel.text = @"iPhone Button Pushed";
}
@end
