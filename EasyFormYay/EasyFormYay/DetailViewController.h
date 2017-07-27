//
//  DetailViewController.h
//  EasyFormYay
//
//  Created by Palak Agarwal on 7/27/17.
//  Copyright © 2017 Palak Agarwal. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DetailViewController : UIViewController

@property (strong, nonatomic) NSDate *detailItem;
@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;

@end

