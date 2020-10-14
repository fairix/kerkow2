<?php

declare(strict_types=1);

namespace Kerkow\ZipShop\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;
use Shopware\Core\Framework\Migration\InheritanceUpdaterTrait;


class Migration1598270766 extends MigrationStep
{
    use InheritanceUpdaterTrait;
    public function getCreationTimestamp(): int
    {
        return 1598270766;
    }

    public function update(Connection $connection): void
    {

        $connection->executeUpdate('
            CREATE TABLE IF NOT EXISTS `kerkow_postalcodes` (
              `id` BINARY(16) NOT NULL,
              `zip` INT(5) NOT NULL,
              `city` VARCHAR(255) NOT NULL,
              `created_at` DATETIME(3) NOT NULL,
              `updated_at` DATETIME(3) NULL,
              PRIMARY KEY (`id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ');


        $connection->executeUpdate(
            "INSERT INTO `kerkow_postalcodes` (`id`, `zip`, `city`, `created_at`, `updated_at`) VALUES
        ('1', '10551', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('2', '10553', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('3', '10555', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('4', '10557', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('5', '10559', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('6', '10585', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('7', '10587', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('8', '10589', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('9', '10623', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('10', '10625', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('11', '10627', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('12', '10629', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('13', '13347', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('14', '13349', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('15', '13351', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('16', '13353', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('17', '13355', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('18', '13357', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('19', '13359', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('20', '13403', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('21', '13405', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('22', '13407', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('23', '13409', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('24', '13435', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('25', '13437', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('26', '13439', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('27', '13465', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('28', '13467', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('29', '13469', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('30', '13503', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('31', '13505', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('32', '13507', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('33', '13509', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('34', '13581', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('35', '13583', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('36', '13585', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('37', '13587', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('38', '13589', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('39', '13591', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('40', '13593', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('41', '13595', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('42', '13597', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('43', '13599', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('44', '13627', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('45', '13629', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('46', '14050', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('47', '14052', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('48', '14053', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('49', '14055', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('50', '14057', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('51', '14059', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('52', '14089', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('53', '14109', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('54', '14129', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('55', '14163', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('56', '14165', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('57', '14167', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('58', '14169', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('59', '14193', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('60', '14195', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('61', '14197', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('62', '14199', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('76', '10707', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('77', '10709', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('78', '10711', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('79', '10713', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('80', '10715', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('81', '10717', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('82', '10719', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('83', '10777', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('84', '10779', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('85', '10781', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('86', '10783', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('87', '10785', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('88', '10787', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('89', '10789', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('90', '10823', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('91', '10825', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('92', '10827', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('93', '10829', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('94', '12043', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('95', '12045', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('96', '12047', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('97', '12049', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('98', '12051', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('99', '12053', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('100', '12055', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('101', '12057', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('102', '12059', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('103', '12099', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('104', '12101', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('105', '12103', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('106', '12105', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('107', '12107', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('108', '12109', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('109', '12157', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('110', '12159', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('111', '12161', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('112', '12163', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('113', '12165', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('114', '12167', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('115', '12169', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('116', '12203', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('117', '12205', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('118', '12207', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('119', '12209', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('120', '12247', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('121', '12249', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('122', '12277', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('123', '12279', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('124', '12305', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('125', '12307', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('126', '12309', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('127', '12347', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('128', '12349', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('129', '12351', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('130', '12353', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('132', '12357', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('133', '12359', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('134', '12435', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('135', '12437', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('136', '12439', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('137', '12459', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('138', '12487', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('139', '12489', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('140', '12524', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('141', '12526', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('142', '12527', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('144', '12555', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('146', '12559', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('147', '12587', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('148', '12589', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('150', '10115', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('151', '10117', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('152', '10119', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('153', '10178', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('154', '10179', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('155', '10243', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('156', '10245', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('157', '10247', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('158', '10249', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('159', '10315', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('160', '10317', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('161', '10318', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('162', '10319', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('163', '10365', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('164', '10367', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('165', '10369', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('166', '10405', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('167', '10407', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('168', '10409', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('169', '10435', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('170', '10437', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('171', '10439', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('172', '10961', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('173', '10963', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('174', '10965', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('175', '10967', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('176', '10969', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('177', '10997', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('178', '10999', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('179', '12619', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('180', '12621', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('181', '12623', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('182', '12627', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('183', '12629', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('184', '12679', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('185', '12681', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('186', '12683', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('187', '12685', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('188', '12687', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('189', '12689', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('190', '13051', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('191', '13053', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('192', '13055', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('193', '13057', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('194', '13059', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('195', '13086', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('196', '13088', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('197', '13089', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('198', '13125', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('199', '13127', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('200', '13129', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('201', '13156', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('202', '13158', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('203', '13159', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('204', '13187', 'Berlin','2020-08-20 11:47:55.901', NULL),
        ('205', '13189', 'Berlin','2020-08-20 11:47:55.901', NULL);"
        );
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}